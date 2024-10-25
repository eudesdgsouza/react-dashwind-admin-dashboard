import HeartIcon  from '@heroicons/react/24/outline/HeartIcon'
import BoltIcon  from '@heroicons/react/24/outline/BoltIcon'


function PageStats({}){
    return(
        <div className="stats bg-base-100 shadow">
  
  <div className="stat">
    <div className="stat-figure invisible md:visible">
        <HeartIcon className='w-8 h-8'/>
    </div>
    <div className="stat-title">Total Likes</div>
    <div className="stat-value">25.6K</div>
    <div className="stat-desc">Alta de 21%</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure invisible md:visible">
        <BoltIcon className='w-8 h-8'/>
    </div>
    <div className="stat-title">Visualizações da página</div>
    <div className="stat-value">2.6M</div>
    <div className="stat-desc">Alta de 14%</div>
  </div>
</div>
    )
}

export default PageStats