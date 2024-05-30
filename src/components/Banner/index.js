import React, {useState} from 'react';

import {Container} from "./style"
import Select from '../Select';

function Banner(props) {
    const [lang, setLang] = useState("");

  	return (
		<Container>
			<div>
				<img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix Logo"/>
			</div>
			<div className='button'>
				<Select value={lang} onChangeSelect={setLang}/>	   
				<button>Sign In</button>
			</div>
		
			<div className='title'>
				<div>{props.title}</div>
				<div>{props.description}</div>
			</div>
			<div>	
				<div className='subTitle1'>{props.subTitle1}</div>
				<div className='subTitle2'>{props.subTitle2}</div>
			</div>
		
			<div className='buttons'>
				<button className='b1'>Email address</button>
				<button className='b2'>Get Started</button>
			</div>
			<div style={{color:'white'}}>{lang}</div>
		</Container>	         
  	);
}

export default Banner;
