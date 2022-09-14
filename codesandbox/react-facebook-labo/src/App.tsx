import { useState } from "react";

import styles from "./App.module.css";

const App = () => {
  return (
    <>
      <div className={styles.f_card}>
        <div className={styles.header}>
          <div className={styles.options}>
            <i className="fa fa-chevron-down"></i>
          </div>
          <img
            className={styles.co_logo}
            src="https://www.placecage.com/c/40/40"
          />
          <div className={styles.co_name}>
            <a href="#">Nicolas Cage</a>
          </div>
          <div className={styles.time}>
            <a href="#">2hrs</a> · <i className="fa fa-globe"></i>
          </div>
        </div>
        <div className={styles.content}>
          <p>
            Height is optional, if no height is specified the image will be a
            square. Example:&nbsp;
            <a href="https://www.placecage.com/">https://www.placecage.com/</a> 
          </p>
        </div>

        <div className={styles.reference}>
          <img className={styles.reference_thumb} src="https://www.placecage.com/c/476/250" />
          <div className={styles.reference_content}>
            <div className={styles.reference_title}>
              A quick and simple image placeholder service. | PlaceCage
            </div>
            <div className={styles.reference_subtitle}>
              How does it work? Just put your image size after our URL and
              you'll get a placeholder.
            </div>
            <div className={styles.reference_font}>placecage.com</div>
          </div>
        </div>
        <div className={styles.social}>
          <div className={styles.social_content}></div>
          <div className={styles.social_buttons}>
            <span>
              <i className="fa fa-thumbs-up"></i>Like
            </span>
            <span>
              <i className="fa fa-comment"></i>Comment
            </span>
            <span>
              <i className="fa fa-share"></i>Share
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
