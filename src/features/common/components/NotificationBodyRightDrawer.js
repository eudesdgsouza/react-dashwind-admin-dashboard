function NotificationBodyRightDrawer(){
    return(
        <>
             {
                [...Array(15)].map((_, i) => {
                    return <div key={i} className={"grid mt-3 card bg-base-200 rounded-box p-3" + (i < 5 ? " bg-blue-100" : "")}>
                            {i % 2 === 0 ? `Suas vendas aumentaram 30% ontem` : `Total de curtidas para postagem no Instagram - Novo lançamento esta semana, ultrapassou 100 mil `}
                        </div> 
                })
            }
        </>
    )
}

export default NotificationBodyRightDrawer