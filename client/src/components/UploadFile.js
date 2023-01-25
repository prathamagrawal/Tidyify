import { useState } from "react";
const UploadFile = () => {

    const [files, setFiles] = useState(null);

    return (
        <>{!files && (
            <div className="dragzone">
                <h2>Drag and drop files to upload</h2>
                <h2> or </h2>
                <button> Select files</button>
            </div>
        )}
        </>
    );
};

export default UploadFile;