import { useState } from "react";
import "./contact.css";

const Contact = () => {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="containers">
      <section className="creative-contact">
        <div className="background-shape shape-1"></div>
        <div className="background-shape shape-2"></div>

        <div className="contact-container">
          <div className="contact-text">
            <h1 className="titles">
              Vamos criar <span>algo incrível</span> juntos?
            </h1>
            <p>
              Se você tem uma ideia, um projeto ou quer tirar algo do papel, me
              envie uma mensagem. Eu respondo rápido.
            </p>
          </div>

          <form className="contact-card" onSubmit={handleSubmit}>
            <input
              type="text"
              name="nome"
              placeholder="Seu nome"
              value={form.nome}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Seu email"
              value={form.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="mensagem"
              placeholder="Descreva seu projeto..."
              rows={5}
              value={form.mensagem}
              onChange={handleChange}
              required
            />

            <button className="button" type="submit">
              Enviar mensagem
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
