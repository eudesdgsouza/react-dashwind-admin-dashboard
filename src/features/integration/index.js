import { useState } from "react"
import { useDispatch } from "react-redux"
import TitleCard from "../../components/Cards/TitleCard"
import { showNotification } from "../common/headerSlice"


const INITIAL_INTEGRATION_LIST = [
    {name : "Slack", icon : "https://cdn-icons-png.flaticon.com/512/2111/2111615.png", isActive : true, description : "Slack é um programa de mensagens instantâneas desenvolvido pela Slack Technologies e de propriedade da Salesforce."},
    {name : "Facebook", icon : "https://cdn-icons-png.flaticon.com/512/124/124010.png", isActive : false, description : "Meta Platforms, Inc., fazendo negócios como Meta e anteriormente denominada Facebook, Inc., e TheFacebook."},
    {name : "Linkedin", icon : "https://cdn-icons-png.flaticon.com/512/174/174857.png", isActive : true, description : "LinkedIn é uma plataforma de mídia social focada em negócios e empregos que funciona por meio de sites e aplicativos móveis."},
    {name : "Google Ads", icon : "https://cdn-icons-png.flaticon.com/512/2301/2301145.png", isActive : false, description : "O Google Ads é uma plataforma de publicidade on-line desenvolvida pelo Google, onde os anunciantes fazem lances para exibir anúncios breves, ofertas de serviços"},
    {name : "Gmail", icon : "https://cdn-icons-png.flaticon.com/512/5968/5968534.png", isActive : false, description : "Gmail é um serviço de e-mail gratuito fornecido pelo Google. Em 2019, tinha 1,5 bilhão de usuários ativos em todo o mundo."},
    {name : "Salesforce", icon : "https://cdn-icons-png.flaticon.com/512/5968/5968880.png", isActive : false, description : "Ela fornece software e aplicativos de gerenciamento de relacionamento com o cliente com foco em vendas, atendimento ao cliente e automação de marketing."},
    {name : "Hubspot", icon : "https://cdn-icons-png.flaticon.com/512/5968/5968872.png", isActive : false, description : "Desenvolvedor e comerciante americano de produtos de software para inbound marketing, vendas e atendimento ao cliente."},
]

function Integration(){

    const dispatch = useDispatch()

    const [integrationList, setIntegrationList] = useState(INITIAL_INTEGRATION_LIST)


    const updateIntegrationStatus = (index) => {
        let integration = integrationList[index]
        setIntegrationList(integrationList.map((i, k) => {
            if(k===index)return {...i, isActive : !i.isActive}
            return i
        }))
        dispatch(showNotification({message : `${integration.name} ${integration.isActive ? "disabled" : "enabled"}` , status : 1}))
    }


    return(
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {
                integrationList.map((i, k) => {
                    return(
                        <TitleCard key={k} title={i.name} topMargin={"mt-2"}>
                            
                            <p className="flex">
                                <img alt="icon" src={i.icon} className="w-12 h-12 inline-block mr-4" />
                                {i.description}
                            </p>
                            <div className="mt-6 text-right">
                                <input type="checkbox" className="toggle toggle-success toggle-lg" checked={i.isActive} onChange={() => updateIntegrationStatus(k)}/>
                            </div>
                            
                        </TitleCard>
                    )
                
                })
            }
            </div>
        </>
    )
}

export default Integration