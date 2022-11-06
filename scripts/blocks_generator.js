const TAB = "  "

function pythonBool(input){
    if (input == "true" || input == "TRUE" || input == true) {
        return "True"
    } else {
        return "False"
    }
}

Blockly.Python["text_test"] = function(block){
    return "print('Hello World')\n";
}

Blockly.Python["model_define"] = function(block){
    console.log(block)
    let name = block.getFieldValue("Name")// || "Model"
    console.log(name)
    let code = "class " + name + "(nn.Module):\n"
    code += TAB + "def __init__(self):\n"
    code += TAB + TAB + "super(" + name + ", self).__init__()\n"
    code += TAB + TAB + "self.layers = nn.Sequential(\n"

    let layers = Blockly.Python.statementToCode(block, "Model")
    layers = layers.split("\n").join("\n"+TAB+TAB)
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
    let bias = block.getFieldValue("Bias")
    let code = "nn.Linear(in_features="+input+", out_features="+output+", bias="+pythonBool(bias)+"), # ("+input+") -> ("+output+")\n"
    return code
}

Blockly.Python["activation_relu"] = function(block){
    let code = "nn.ReLU()\n"
    return code
}

Blockly.Python["activation_leaky_relu"] = function(block){
    let slope = block.getFieldValue("Neg Slope")
    let code = "nn.LeakyReLU(negative_slope="+slope+")\n"
    return code
}