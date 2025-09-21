import { MailOpen } from "lucide-react";
import { Link } from "react-router";

const SentEmail = () => {
    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-b from-blue-200 to-orange-200 px-4">
                <div className="bg-white/50 p-8 flex flex-col items-center justify-center lg:max-w-[500px] backdrop-blur-md">
                    <div className="w-20 h-20 bg-green-200 flex justify-center items-center rounded-full mb-2">
                        <MailOpen size={30} />
                    </div>
                    <h2 className="text-2xl font-bold">Email anda sudah terkirim</h2>
                    <span className="text-center text-gray-700 mt-5">Kami telah mengirimkan link login ke email Anda. Silakan periksa inbox Anda untuk melanjutkan.</span>
                    <span className="mt-3 font-medium">
                        Email tidak terkirim? <Link to={'/'}>Klik disini</Link>
                    </span>
                </div>
            </div>
        </>
    );
}

export default SentEmail;