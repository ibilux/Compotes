import Field from "./Field";
import FieldHtmlProperties from "./FieldHtmlProperties";
import type AssociatedField from "./AssociatedField";

export default class CollectionField extends Field
{
    constructor(name: string, item_field: Field, field_html_properties: FieldHtmlProperties = FieldHtmlProperties.defaults()) {
        super(name, '', item_field, field_html_properties);
    }

    public displayFromItem(item: object|any): any {
        let field: Field|AssociatedField;

        const items = item[this.name];

        if (items.length === 0 || !(items instanceof Array)) {
            return null;
        }

        field = this._associated_field;

        return items.map((singleItem) => field.displayFromItem(singleItem));
    }
}
