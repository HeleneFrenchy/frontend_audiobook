import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "components/ui/form";
import { Button } from "components/ui/button";
import { Input } from "components/ui/input";
import { useToast } from "components/ui/use-toast";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "store/authApi";

const formSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: "Email is required",
    })
    .email("The value is not a valid email format"),
  password: z.string().min(6, {
    message: "Password should be at least 6 characters long",
  }),
});

export default function Login() {
  const { toast } = useToast();
  const [login] = useLoginMutation();
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit({ email, password }) {
    const { error } = await login({ email, password });
    
    if (error) {
      toast({
        variant: "destructive",
        title: "An error happened",
        description: error.data,
      });
    } else {
      navigate("/library");
    }
  }

  return (
    <div className="w-4/12 m-auto mt-3 ">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="user@exemple.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="user123" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="bg-green-300 hover:bg-green-500 text-black"
          >
            Login
          </Button>
        </form>
      </Form>
    </div>
  );
}
