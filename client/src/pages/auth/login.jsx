import CommonForm from "@/components/common/form";
import { loginFormControls } from "@/config";
import { useToast } from "@/hooks/use-toast";
import { loginUser } from "@/store/auth-slice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";


const initialState = {
  
  email: "",
  password: "",
}


const AuthRegister = () => {
  const [formData ,setFormData ] = useState(initialState);
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const {toast} = useToast();

  function onSubmit(event) {
    event.preventDefault();
    dispatch(loginUser(formData)).then((data) => {
      if (data?.payload?.success) {
        toast({
          title: data.payload.message,
          description: "User Logged In Successfully",
          variant: "success",
        }); 
      } else {
        toast({
          title: data.payload.message,
          description: "User Login Failed",
          variant: "destructive",
        });
      }
     
      
    });
  }

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
