"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";
import FS_LOGO from "@/assets/logo crna.png";
import { useRouter } from "next/navigation";

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

const LoginForm = () => {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const router = useRouter();

  const handleLogin = (values: z.infer<typeof loginSchema>) => {
    console.log(values);
    router.replace("/home");
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleLogin)}
          className="max-w-sm mx-auto mt-20 px-4 sm:px-0"
        >
          <Image
            src={FS_LOGO}
            alt="fs_logo"
            width={150}
            height={150}
            className="mx-auto mb-20"
          />
          <div className="space-y-4">
            <FormField
              name="username"
              control={form.control}
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Enter username"
                        className="rounded-full shadow-md"
                      />
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
                      <Input
                        {...field}
                        placeholder="Enter password"
                        className="rounded-full shadow-md"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
          </div>
          <Button className="w-full mt-20 bg-black">Login</Button>
        </form>
      </Form>
    </>
  );
};

export default LoginForm;
