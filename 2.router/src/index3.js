import React,{Component} from 'react'
import ReactDOM from 'react-dom';
class Panel extends Component{
	render() {
		return (
			<div className="panel panel-default">
			<div className="panel-heading">头部</div>
			<div className="panel-body">
				{
					this.props.children('面板')
				}
			</div>
		</div>
		)
  }
}
ReactDOM.render(<div>
	<Panel>
	    {(text) => <div style={{color:'red'}}>{`我是${text}`}</div>}
	</Panel>
</div>,document.querySelector('#root'));
