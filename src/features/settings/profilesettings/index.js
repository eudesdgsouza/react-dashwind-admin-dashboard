import moment from "moment"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import TitleCard from "../../../components/Cards/TitleCard"
import { showNotification } from '../../common/headerSlice'
import InputText from '../../../components/Input/InputText'
import TextAreaInput from '../../../components/Input/TextAreaInput'
import ToogleInput from '../../../components/Input/ToogleInput'

function ProfileSettings(){


    const dispatch = useDispatch()

    // Call API to update profile settings changes
    const updateProfile = () => {
        dispatch(showNotification({message : "Perfil atualizado", status : 1}))    
    }

    const updateFormValue = ({updateType, value}) => {
        console.log(updateType)
    }

    return(
        <>
            
            <TitleCard title="Configurações de perfil" topMargin="mt-2">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputText labelTitle="Nome" defaultValue="Alex" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="E-mail" defaultValue="alex@dashwind.com" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="Cargo" defaultValue="UI/UX Designer" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="Endereço" defaultValue="California" updateFormValue={updateFormValue}/>
                    <TextAreaInput labelTitle="Sobre" defaultValue="Doing what I love, part time traveller" updateFormValue={updateFormValue}/>
                </div>
                <div className="divider" ></div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputText labelTitle="Linguagem" defaultValue="Portugues" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="Fuso Horário" defaultValue="BRA" updateFormValue={updateFormValue}/>
                    <ToogleInput updateType="syncData" labelTitle="Sync Data" defaultValue={true} updateFormValue={updateFormValue}/>
                </div>

                <div className="mt-16"><button className="btn btn-primary float-right" onClick={() => updateProfile()}>Atualizar</button></div>
            </TitleCard>
        </>
    )
}


export default ProfileSettings