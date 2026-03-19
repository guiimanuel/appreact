import api from '../services/api';

export const getContatos = async (setDados, setLoading, setErro) => {
    setLoading(true);
    try {
        const r = await api.get('/contatos');
        setDados(r.data);
        setLoading(false);
    } catch (e) {
        console.log(e);
        setErro(true);
        setLoading(false);
    }
};