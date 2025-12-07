"use client";

import { useFormStatus } from "react-dom";

const SubmitButton = () => {
    const status = useFormStatus();

    return (
        <button
            type="submit"
            disabled={status.pending}
            className="bg-blue-500 text-white px-4 py-2 rounded"
        >
            {status.pending ? "Submitting..." : "Submit"}
        </button>
    )
}

export default SubmitButton;