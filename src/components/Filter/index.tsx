/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import "./styles.css";

type Props = {
    onSearch: Function;
}

type FormData = {
    min?: number;
    max?: number;
}
export default function Filter({ onSearch }: Props) {
    const [formData, setFormData] = useState<FormData>({
        min: undefined,
        max: undefined
    })

    function handleImputChange(event: any) {
        const value = event.target.value;
        const name = event.target.name;
        setFormData({ ...formData, [name]: value })
    }

    function handleSubmit(event: any) {
        event.preventDefault();
        setFormData(formData);
        onSearch(formData.min, formData.max);
    }

    return (
        <>
            <div className="searchSection">
                <form className="searchProdF" onSubmit={handleSubmit}>
                    <input className="searchProd" placeholder="Preço Mínimo"
                        name='min'
                        value={formData.min || ""}
                        type="text"
                        onChange={handleImputChange}
                    />
                    <input className="searchProd" placeholder="Preço Máximo"
                        name='max'
                        value={formData.max || ""}
                        type="text"
                        onChange={handleImputChange}
                    />
                    <div className="dflex mt25">
                        <button type='submit' className="buttonSub">
                            Filtrar
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}