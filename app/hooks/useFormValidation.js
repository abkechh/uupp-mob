import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const useFormValidation = (schema) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  return {
    control,
    handleSubmit,
    errors,
    isSubmitting,
    reset,
  };
};

export default useFormValidation;
