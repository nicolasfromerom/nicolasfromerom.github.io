const $form = document.getElementById('form');
const $mailTo = document.getElementById('mail');

$form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const form = new FormData(this);
    console.log(form.get('name'));
    $mailTo.setAttribute('href', `mailto:romero.nicolasone@gmail.com?subject=${form.get('asunto')} ${form.get('name')} ${form.get('email')}&body=${form.get('mensaje')}`);

    $mailTo.click();
    $form.reset();

}