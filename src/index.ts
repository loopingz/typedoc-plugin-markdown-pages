import { Application } from "typedoc/dist/lib/application";
import { PLUGIN_NAME } from "./constants";
import { LABEL_OPTION, OUTPUT_DIR_NAME_OPTION, SOURCE_PATH_OPTION } from "./options";
import { MarkdownPagesPlugin } from "./plugin";

module.exports = (PluginHost: Application): void => {
	const app = PluginHost.owner;

	// Register options
	app.options.addDeclaration(<any> LABEL_OPTION);
	app.options.addDeclaration(<any> OUTPUT_DIR_NAME_OPTION);
	app.options.addDeclaration(<any> SOURCE_PATH_OPTION);

	// Register components
	app.renderer.addComponent(PLUGIN_NAME, new MarkdownPagesPlugin(app.renderer));
};