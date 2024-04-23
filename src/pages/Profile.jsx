import React, { useEffect, useState } from "react";
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
import { useProfileQuery, useUpdateProfileMutation } from "store/authApi";

const formSchema = z.object({
  username: z.string().min(2, {
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
  const { data: profile } = useProfileQuery();
  const [isEditMode, setIsEditMode] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "xxxxxx",
    },
  });

  useEffect(() => {
    form.setValue("email", profile?.email);
    form.setValue("username", profile?.username);
  }, [profile]);

  async function onSubmit({ username, email, password }) {
    try {
      await updateprofile({ username, email, password });
      setIsEditMode(false);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "An error happened",
        description: error.message,
      });
    }
  }

  return (
    <div className="w-8/12 m-auto mt-3 ">
      <div className="border-b-2">
        <h2 className="my-4">Profile</h2>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="mt-4">
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input
                    disabled={!isEditMode}
                    placeholder="Username"
                    {...field}
                  />
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
                  <Input
                    disabled={!isEditMode}
                    placeholder="Your Email"
                    {...field}
                  />
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
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    disabled={!isEditMode}
                    type="password"
                    placeholder="Password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {isEditMode && (
            <Button
              type="submit" 
              className="bg-green-300 hover:bg-green-400 text-black"
            >
              {"Update Profile"}
            </Button>
          )}
        </form>
      </Form>

      {!isEditMode && (
        <Button
          type=""
          className="bg-green-300 hover:bg-green-400 text-black mt-7"
          onClick={() => setIsEditMode(!isEditMode)} 
        >
          {"Edit Profile"}
        </Button>
      )}
    </div>
  );
}
