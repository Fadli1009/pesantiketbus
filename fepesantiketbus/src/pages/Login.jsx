import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useSEO } from "../hooks/useSEO";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/images/logo/buztics.png";
import Loader from "../components/templates/loader";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

function Login() {
    useSEO({
        title: "Login - Buztics",
        description: "Login and book your bus tickets with ease.",
        // favicon: "../assets/images/loader/buztics.png", // path dari public
        image: "../assets/images/logo/buztics.png", // untuk share ke WhatsApp/Twitter
        url: "https://buztics.com/register", // bisa dynamic
    });

    const [isLoading, setIsLoading] = useState(true);
    const form = useForm({
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    });

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    // Tagline Animasi
    const taglines = [
        "Easy Booking, Happy Traveling.",
        "Ride Easy, Book Smart with Buztics.",
        "Your Journey, Just One Click Away.",
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % taglines.length);
        }, 3000); // ganti setiap 3 detik
        return () => clearInterval(interval);
    }, []);

    if (isLoading) {
        return <Loader />;
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-b from-blue-200 to-orange-200 px-4">
            <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-[1320px] gap-10 mx-5">
                <div className="flex flex-col items-center text-center space-y-2 lg:w-1/2">
                    {/* Logo */}
                    <img src={Logo} alt="Logo" className="w-50 object-contain sm:w-100" />

                    {/* Tagline */}
                    <div className="relative h-8 overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.p
                                key={index}
                                initial={{ y: "100%", opacity: 0, rotateX: -90 }}
                                animate={{ y: "0%", opacity: 1, rotateX: 0 }}
                                exit={{ y: "-100%", opacity: 0, rotateX: 90 }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                                className="text-sm sm:text-lg font-semibold text-gray-700"
                            >
                                {taglines[index]}
                            </motion.p>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Register Card */}
                <Card className="w-full max-w-md lg:max-w-lg xl:max-w-xl shadow-xl rounded-2xl bg-white/80 backdrop-blur-lg">
                    <CardHeader className="flex flex-col items-center text-center space-y-2">
                        <CardTitle className="text-4xl font-bold text-gray-800">
                            Login
                        </CardTitle>
                        <CardDescription className="text-gray-600">
                            <small>
                                Silahkan masuk untuk melakukan pemesanan tiket di Buztics!
                            </small>
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        <Form {...form}>
                            <form
                                onSubmit={form.handleSubmit((values) => {
                                    console.log(values);
                                })}
                                className="space-y-4"
                            >

                                {/* Email */}
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-gray-700">Email</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="email"
                                                    placeholder="Masukkan email"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                {/* Password */}
                                <FormField
                                    control={form.control}
                                    name="password"
                                    rules={{
                                        required: "Password wajib diisi",
                                        minLength: {
                                            value: 6,
                                            message: "Password minimal 6 karakter",
                                        },
                                    }}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-gray-700">Password</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="password"
                                                    placeholder="Masukkan password"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />


                                {/* Button */}
                                <Button
                                    className="w-full mt-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:opacity-90"
                                    type="submit"
                                >
                                    Daftar
                                </Button>

                                {/* Divider */}
                                <div className="flex items-center my-4">
                                    <hr className="flex-grow border-gray-300" />
                                    <span className="mx-3 text-gray-500 text-sm">atau</span>
                                    <hr className="flex-grow border-gray-300" />
                                </div>

                                {/* Social login */}
                                <div className="flex justify-center gap-6">
                                    <Link to="/">
                                        <img
                                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                                            alt="Google"
                                            className="w-7 h-7"
                                        />
                                    </Link>
                                    <Link to="/">
                                        <img
                                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg"
                                            alt="Facebook"
                                            className="w-7 h-7"
                                        />
                                    </Link>
                                    <Link to="/">
                                        <img
                                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                                            alt="GitHub"
                                            className="w-7 h-7"
                                        />
                                    </Link>
                                </div>
                            </form>
                        </Form>
                    </CardContent>

                    <CardFooter className="flex justify-center text-sm text-gray-600">
                        Belum punya akun?{" "}
                        <Link to="/register" className="ml-1 text-blue-600 hover:underline">
                            Daftar di sini
                        </Link>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}

export default Login;
