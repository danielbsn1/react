import HookUseState from "../componentes/HookUserStat";
import HookUseReducer from "../componentes/HookUseReducer";
import HookUseEffect from "../componentes/HookUseEffect";

const Home = () => {
    return (
        <div>
            <h1>Pagina inicial</h1>
            <HookUseState />
            <HookUseReducer />
            <HookUseEffect />

        </div>
    );
};

export default function Contato() {
  return <h1>Contato</h1>
}