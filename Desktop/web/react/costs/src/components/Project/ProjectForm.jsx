import styles from './ProjectForm.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import Submit from '../form/Submit'


function ProjectForm({btnText}){
    return (
        <form className={styles.ProjectForm}>
            <Input type="text" text="Nome Projeto" name = "name" placeholder = "Insira o nome do projeto" />
            <Input type="number" text="Orçamento" name = "budget" placeholder = "Insira o valor do orçamento" />
            <Select name="category_id" text="Selecione a categoria"  />
            <Submit text={btnText}/>
        </form>
    )
}

export default ProjectForm