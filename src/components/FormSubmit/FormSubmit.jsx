

const FormSubmit = () => {
    const handlSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const number = form.number.value;
       
    }
    return (
        <form onSubmit={handlSubmit}>
            <input type="text" name="name" id="" />
            <br />
            <input type="email" name="email" id="" />
            <br />
            <input type="text" name="number" id="" />
            <br />
            <input type="submit" value="Submit" />
        </form>
    );
};

export default FormSubmit;