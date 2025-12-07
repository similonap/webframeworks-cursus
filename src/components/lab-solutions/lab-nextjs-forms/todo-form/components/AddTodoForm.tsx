import { addTodoAction } from "@/actions";
import SubmitButton from "./SubmitButton";

const AddTodoForm = () => {
    return (
        <form className="mb-4" action={addTodoAction}>
            <input
                type="text"
                name="title"
                placeholder="New todo"
                className="border border-gray-300 rounded px-3 py-2 mr-2 w-64"
            />
            <SubmitButton/>
        </form>
    )
}

export default AddTodoForm;