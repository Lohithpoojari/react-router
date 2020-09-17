import React,{useEffect,useState} from 'react';

function BannerDetail({match}){

useEffect(()=>{
 fetchBanners();

},[]);


const [bannerDetail, setBannerDetail] = useState([{}]);
//const[bannerImage,setBannerImage] = useState([]);

const fetchBanners = async ()=>{

        const data = await fetch("https://fortnite-api.com/v1/banners");
        const banners = await data.json();
        setBannerDetail(banners.data);


};

var  bannerData = [];
bannerDetail.map(banner=>{

        if(banner.id===match.params.id){
                bannerData = {
                        id:banner.id,
                        smallIcon:banner.images.smallIcon,
                        name:banner.name,
                        description:banner.description,
                        devName:banner.devName,
                        icon:banner.images.icon
                }
        }
})

return(
        <div style={{alignItems:'center',marginLeft:'20px'}}>
                <h4>Banner Name: {bannerData.name} </h4>
<h4>Banner ID: {bannerData.id}</h4>
<h4>Banner Description: {bannerData.description}</h4>
<h4>Banner Developer Name: {bannerData.devName}</h4>

<br></br>

                
                <img src={bannerData.icon} ></img>
                
        </div>
);

      /*  return(
        
<div>
  {
bannerDetail.map(banner=>(
                <h1>{banner.devName}</h1>
        )) }
        {
                bannerDetail.map(banner=>(
                        if(banner.devName==match.params.id){
                               
                        }
                        
                ))
        }
        
</div>

        );*/

}
export default BannerDetail;