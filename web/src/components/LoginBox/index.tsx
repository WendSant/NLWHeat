
import { VscGithubInverted } from 'react-icons/vsc';
import styles from './styles.module.scss'


export function LoginBox(){
    const signInUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=51f9b6752cbea82a8d73`

    return (
        <div className={styles.loginBoxWrapper}>
            <strong>Login and share your message</strong>
            <a href={signInUrl} className={styles.signInWithGithub}>
                <VscGithubInverted size="24" />
                Login with Github
            </a>


        </div>
    )
} 