class MenuItem{
	constructor(id){
		this.ID = id;
		this.active = false;
		this.exclusive = false;
		this.UI;
		this.Command;

		this.bindUIComponent = this.bindUIComponent.bind(this);
		this.bindCommand = this.bindCommand.bind(this);
		this.execute = this.execute.bind(this);
	}

	bindUIComponent(ID){
		this.UI = ID;
	}

	bindCommand(commandClass){
		this.Command = commandClass;
	}

	execute(param){}
}


class ExclusiveMenuItem extends MenuItem{
	constructor(id){
		super(id);
	}
}

class NormalMenuItem extends MenuItem{
	constructor(id, flag){
		super(id);
		this.flag = flag;
	}
	execute(param){
		let command = new this.Command();
		command.execute(param);

		Command.redoCommandStack.push(command);
	}
}

// Command 内部保存execute 和 unexecute的参数
// NormalMenuItem内存保存布尔变量 指示相应的command执行完毕之后是否要入栈 例如 redo undo命令就不入栈

class Command{
	execute(param){}
	unexecute(param){}
}

Command.redoCommandStack = [];
Command.undoCommandStack = [];

class BoxZoom extends Command{
	execute(param){
		console.log("execute");
	}

	unexecute(param){
		console.log("unexecute");
	}
}

var item = new NormalMenuItem("test");
