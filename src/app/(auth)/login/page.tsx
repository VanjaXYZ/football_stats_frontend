"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

const loginSchema = z
  .object({
    username: z.string(),
    password: z.string(),
  })
  .refine(
    (data) => {
      if (!data.username) return;
      return true;
    },
    {
      message: "Username required!",
      path: ["username"],
    }
  )
  .refine(
    (data) => {
      if (!data.password) return;
      return true;
    },
    {
      message: "Password required!",
      path: ["password"],
    }
  );

const Login = () => {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const handleLogin = (values: z.infer<typeof loginSchema>) => {
    console.log(values);
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleLogin)}
          className="max-w-sm mx-auto mt-20 px-4 sm:px-0"
        >
          <h3 className="py-2 text-center font-bold text-2xl">LOGIN</h3>
          <div className="space-y-4">
            <FormField
              name="username"
              control={form.control}
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormControl>
                      <Input {...field} placeholder="Enter username" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <FormField
              name="password"
              control={form.control}
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormControl>
                      <Input {...field} placeholder="Enter password" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
          </div>
          <Button className="w-full mt-20">Login</Button>
        </form>
      </Form>
    </>
  );
};

export default Login;
