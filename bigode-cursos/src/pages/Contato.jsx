function Contato() {
  return (
    <div className="page">
      <h2>Fale Conosco</h2>
      <form className="form">
        <input type="text" placeholder="Seu nome" />
        <input type="email" placeholder="Seu e-mail" />
        <textarea placeholder="Sua mensagem"></textarea>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contato;
