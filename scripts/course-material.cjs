#!/usr/bin/env node
const fs = require('node:fs');
const path = require('node:path');
const {spawnSync} = require('node:child_process');

const courseDir = path.resolve(__dirname, '..');
const submoduleDir = path.join(courseDir, 'course-material');
const siblingDir = path.resolve(courseDir, '..', 'web-monorepo-docusaurus');
const requestedDir = process.env.COURSE_MATERIAL_DIR
  ? path.resolve(courseDir, process.env.COURSE_MATERIAL_DIR)
  : null;

function isCourseMaterial(directory) {
  return fs.existsSync(path.join(directory, 'scripts/course.cjs')) &&
    fs.existsSync(path.join(directory, 'docs/webframeworks/index.md'));
}

function run(command, args, cwd = courseDir) {
  const result = spawnSync(command, args, {cwd, stdio: 'inherit'});
  if (result.error) throw result.error;
  if (result.status !== 0) process.exit(result.status ?? 1);
}

function localMaterial() {
  if (requestedDir) {
    if (!isCourseMaterial(requestedDir)) {
      throw new Error(`COURSE_MATERIAL_DIR bevat geen geldige monorepo: ${requestedDir}`);
    }
    return requestedDir;
  }
  return isCourseMaterial(siblingDir) ? siblingDir : null;
}

const [command = 'assemble', ...args] = process.argv.slice(2);
const localDir = localMaterial();

if (command === 'setup') {
  if (localDir) {
    console.log(`Lokale monorepo gebruiken: ${localDir}`);
    run('npm', ['ci', '--include=dev'], localDir);
  } else {
    run('git', ['submodule', 'sync', '--recursive']);
    run('git', ['submodule', 'update', '--init', '--remote', '--recursive', '--checkout', 'course-material']);
    run('npm', ['ci', '--include=dev'], submoduleDir);
  }
} else {
  const materialDir = localDir ?? submoduleDir;
  if (!isCourseMaterial(materialDir)) {
    throw new Error('Voer eerst npm run setup uit om het gedeelde cursusmateriaal op te halen.');
  }
  run(process.execPath, [path.join(materialDir, 'scripts/course.cjs'), '--course', courseDir, command, ...args]);
}
