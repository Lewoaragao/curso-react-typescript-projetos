import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../components/input";
import { FormEvent, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebaseConnection";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log({ email: email, password: password });

    if (email === "" || password === "") {
      alert("Preencha todos os campos");
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("Logado com sucesso");
        navigate("/admin", { replace: true });
      })
      .catch((error) => {
        console.log("Erro ao fazer o login: ");
        console.log(error);
      });
  }

  return (
    <div className="flex w-full h-screen items-center justify-center flex-col">
      <Link to="/" className="mt-11 text-white mb-7 font-bold text-5xl">
        Dev
        <span className="bg-gradient-to-r from-yellow-500 to-orange-400 bg-clip-text text-transparent">
          Link
        </span>
      </Link>

      <form onSubmit={handleSubmit} className="w-full max-w-xl flex flex-col">
        <Input
          placeholder="Digite o seu e-mail..."
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          placeholder="********"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="h-9 bg-blue-600 rounded border-0 text-lg font-medium text-white cursor-pointer">
          Acessar
        </button>
      </form>
    </div>
  );
}
