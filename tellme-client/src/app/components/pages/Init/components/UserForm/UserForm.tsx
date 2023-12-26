import Input from "@/app/components/UI/Input/Input";

function UserForm () {
    return (
        <div className="user-from">
            <span className="user-form__header">
                About you
            </span>
            <div>
                <Input 
                    label="Name"                
                />
            </div>
            <div>
                <Input 
                    label="Gender"                
                />
                <Input 
                    label="Age"                
                />
            </div>
        </div>
    );
}

export default UserForm;