

function AmountStats({}){
    return(
        <div className="stats bg-base-100 shadow">
            <div className="stat">
                <div className="stat-title">Valor arrecadado</div>
                <div className="stat-value">R$ 25.600</div>
                <div className="stat-actions">
                    <button className="btn btn-xs">Ver Usuários</button> 
                </div>
            </div>
            
            <div className="stat">
                <div className="stat-title">Lucro</div>
                <div className="stat-value">R$ 5.600</div>
                <div className="stat-actions">
                    <button className="btn btn-xs">Ver Membros</button> 
                </div>
            </div>
        </div>
    )
}

export default AmountStats