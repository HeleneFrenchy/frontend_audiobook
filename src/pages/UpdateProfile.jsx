import React from "react";
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
import { useUpdateProfileMutation } from "store/authApi";

const formSchema = z.object({
  Username: z.string().min(2, {
    message: "Username should be at least 2 characters long",
  }),
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

export default function UpdateProfile() {
  const { toast } = useToast();
  const [updateprofile] = useUpdateProfileMutation();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit({ username, email, password }) {
    try {
      await updateprofile({ username, email, password });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "An error happened",
        description: error.message,
      });
    }
  }

  return (
    <div className="w-4/12 m-auto mt-3 ">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Username" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Your Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>New Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="New Password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="bg-green-300 hover:bg-green-400 text-black">
            Update Profile
          </Button>
        </form>
      </Form>
    </div>
  );
}
