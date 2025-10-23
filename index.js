function enviarEmail(event){
    event.preventDefault();

    const form = event.target;
    const inputNome = document.getElementById('nome');
    const textarea = document.getElementById('mensagem');
    const meuEmail = 'luizrbrizq@hotmail.com';

    const nome = inputNome ? inputNome.value.trim() : '';
    const mensagem = textarea ? textarea.value.trim() : '';

    if (!nome || !mensagem) {
        alert('Por favor, preencha seu nome e mensagem.');
        return;
    }

    const texto = `Olá! Me chamo ${nome}.\n\n${mensagem}`;
    const assunto = `Contato pelo site - ${nome}`;
    const mailto = `mailto:${meuEmail}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(texto)}`;

    // abre o cliente de e-mail padrão com os campos preenchidos
    window.location.href = mailto;

    form.reset();
}