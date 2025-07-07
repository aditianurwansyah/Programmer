import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/hooks/use-toast";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    fullName: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isSignUp) {
      if (formData.password !== formData.confirmPassword) {
        toast({
          title: "Error",
          description: "Password tidak cocok",
          variant: "destructive",
        });
        return;
      }

      // Simulate sign up
      toast({
        title: "Berhasil!",
        description: "Akun berhasil dibuat. Selamat datang di BhraGha!",
      });
    } else {
      // Simulate login
      toast({
        title: "Selamat datang!",
        description: "Login berhasil. Selamat menjelajahi budaya Indonesia!",
      });
    }

    onClose();
    setFormData({ email: "", password: "", confirmPassword: "", fullName: "" });
  };

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
    setFormData({ email: "", password: "", confirmPassword: "", fullName: "" });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-cream-50 border-brown-200">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-brown-800 text-center">
            {isSignUp ? "Daftar Akun" : "Masuk ke BhraGha"}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          {isSignUp && (
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-brown-700">
                Nama Lengkap
              </Label>
              <Input
                id="fullName"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Masukkan nama lengkap"
                className="border-brown-300 focus:border-gold-500"
                required
              />
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="email" className="text-brown-700">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="contoh@email.com"
              className="border-brown-300 focus:border-gold-500"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-brown-700">
              Password
            </Label>
            <Input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Masukkan password"
              className="border-brown-300 focus:border-gold-500"
              required
            />
          </div>

          {isSignUp && (
            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-brown-700">
                Konfirmasi Password
              </Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="Ulangi password"
                className="border-brown-300 focus:border-gold-500"
                required
              />
            </div>
          )}

          <Button
            type="submit"
            className="w-full bg-brown-800 hover:bg-brown-900 text-cream-100 font-semibold py-2 transition-colors duration-200"
          >
            {isSignUp ? "Daftar Sekarang" : "Masuk"}
          </Button>
        </form>

        <Separator className="my-4 bg-brown-200" />

        <div className="text-center">
          <p className="text-brown-600 text-sm">
            {isSignUp ? "Sudah punya akun?" : "Belum punya akun?"}
          </p>
          <Button
            type="button"
            variant="link"
            onClick={toggleMode}
            className="text-gold-700 hover:text-gold-800 font-semibold p-0 h-auto"
          >
            {isSignUp ? "Masuk di sini" : "Daftar di sini"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
