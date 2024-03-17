import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const Login = () => {
  return (
    <>
      <div className="h-[50px] w-full mb-20 bg-black"></div>
      <Card className="mx-auto max-w-sm border-none">
        <CardHeader className="space-y-1 text-center uppercase">
          <CardTitle className="text-2xl font-bold">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-8">
            <Input
              id="username"
              placeholder="Enter username"
              required
              type="text"
              name="username"
              className="rounded-full shadow-lg placeholder:text-slate-300 text-lg"
            />
          </div>
          <div className="space-y-2">
            <Input
              id="password"
              required
              type="password"
              placeholder="Enter password"
              className="rounded-full shadow-lg placeholder:text-slate-300 text-lg"
            />
          </div>
          <Button
            className="w-full bg-black text-lg rounded-full shadow-lg mt-20"
            type="submit"
          >
            Login
          </Button>
        </CardContent>
      </Card>
    </>
  );
};

export default Login;
