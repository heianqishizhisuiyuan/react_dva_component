

import React from 'react';
import {TreeSelect} from 'antd'

class User extends React.Component {
	constructor(props){
		super()
		this.state={
			value: ['0-0-0']
		}
		this.onChange=this.onChange.bind(this)
	}


	onChange(value) {
		console.log('onChange ', value, arguments);
		this.setState({ value });
	}
	render(){
	const treeData = [{
	  label: '节点一',
	  value: '0-0',
	  key: '0-0',
	  children: [{
		label: '子节点一',
		value: '0-0-0',
		key: '0-0-0',
	  }],
	}, {
	  label: '节点二',
	  value: '0-1',
	  key: '0-1',
	  children: [{
		label: '子节点三',
		value: '0-1-0',
		key: '0-1-0',
	  }, {
		label: '子节点四',
		value: '0-1-1',
		key: '0-1-1',
	  }, {
		label: '子节点五',
		value: '0-1-2',
		key: '0-1-2',
	  }],
	}];


	const tProps = {
      treeData,
      value: this.state.value,
      onChange: this.onChange,
      multiple: true,
      treeCheckable: true,
      searchPlaceholder: '请选择',
      style: {
        width: 160,
		maxHeight: 27
      },
    }



  return (
    <div >
     <TreeSelect {...tProps} />
    </div>
  );
  }
}



export default User
