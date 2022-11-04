TAB = "  "

Blockly.Python["text_test"] = function(block){
    //Blockly.Python.valueToCode(block, 'DO');
    //block.getFieldValue('END')
    return "print('Hello World')\n";
}

Blockly.Python["model_define"] = function(block){
    let name = block.getFieldValue("Name")// || "Model"
    console.log(name)
    let code = "class " + name + "(nn.Module):\n"
    code += TAB + "def __init__(self):\n"
    code += TAB + TAB + "super(" + name + ", self).__init__()\n"
    code += TAB + TAB + "self.layers = nn.Sequential(\n"

    let layers = Blockly.Python.statementToCode(block, "Model")
    layers = layers.split("\n").join(",\n"+TAB+TAB)
    layers = TAB + TAB + layers
    console.log(layers)

    let end_code =  ")\n"
    end_code += "\n\n" + TAB + "def forward(self, x):\n"
    end_code += TAB + TAB + "return self.layers(x)\n"
    return code + layers + end_code;
}

Blockly.Python["layer_linear"] = function(block){
    let input = block.getFieldValue("Input")
    let output = block.getFieldValue("Output")
    let code = "nn.Linear("+input+", "+output+")\n"
    return code
}

Blockly.Python["activation_relu"] = function(block){
    let code = "nn.ReLU()\n"
    return code
}


testestest={}
testestest['controls_whileUntil'] = function(block) {
    // Do while/until loop.
    const until = block.getFieldValue('MODE') === 'UNTIL';
    let argument0 = Python.valueToCode(
                        block, 'BOOL',
                        until ? Python.ORDER_LOGICAL_NOT : Python.ORDER_NONE) ||
        'False';
    let branch = Python.statementToCode(block, 'DO');
    branch = Python.addLoopTrap(branch, block) || Python.PASS;
    if (until) {
      argument0 = 'not ' + argument0;
    }
    return 'while ' + argument0 + ':\n' + branch;
  };