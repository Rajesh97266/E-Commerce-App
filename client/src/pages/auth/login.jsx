import CommonForm from "@/components/common/form";
import { loginFormControls } from "@/config";
import { useState } from "react";
import { Link } from "react-router-dom";

const initialState = {
  
  email: "",
  password: "",
}


const AuthRegister = () => {
  const [formData ,setFormData ] = useState(initialState);

  function onSubmit() {}

  return (
    <div className="mx-auto max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Sign in to your account
        </h1>
        <p className="mt-2">
          Don&apos;t have an account
          <Link
            className="font-medium ml-2 text-primary hover:underline"
            to="/auth/register"
          >
            Register
          </Link>
        </p>
      </div>
      <CommonForm 
      formControls={loginFormControls}
      formData={formData}
      setFormData={setFormData}
      buttonText={"Sign In"}
     onSubmit={onSubmit}

      />
    </div>
   
  );
};

export default AuthRegister;
