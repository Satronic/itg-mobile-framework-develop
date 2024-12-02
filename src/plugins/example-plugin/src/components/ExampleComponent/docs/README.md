# COMPONENT NAME

Under the component's name, you should explain the topic, giving a **brief description** of its **functionality** in a store when installed.

Next, **add media** (either an image of a GIF) with the rendered components, so that users can better understand how the app works in practice.

![Media Placeholder](https://user-images.githubusercontent.com/52087100/71204177-42ca4f80-227e-11ea-89e6-e92e65370c69.png)

## Configuration

Remember to add a table with all components exported by the main component and their descriptions.

Next, add the **props table** containing your component's props.

If the app exports more than one block, create several tables - one for each block. For example:

### `component` props

| Prop name    | Type            | Description    | Default value                                                                                                                               |
| ------------ | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| `XXXXX`      | `XXXXXX`       | XXXXXXXX         | `XXXXXX`        |


Prop types are:

- `string`
- `enum`
- `number`
- `boolean`
- `object`
- `array`

When documenting a prop whose type is `object` or `array` another prop table will be needed. You can create it following the example below:

- `propName` object:

| Prop name    | Type            | Description    | Default value                                                                                                                               |
| ------------ | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| `XXXXX`      | `XXXXXX`       | XXXXXXXX         | `XXXXXX`        |


Remember to also use this Configuration section to  **showcase any necessary disclaimer** related to the app and its blocks, such as the different behavior it may display during its configuration.

## Modus Operandi *(not mandatory)*

There are scenarios in which a component can behave differently in a store, according to how it was added to the catalog, for example. It's crucial to go through these **behavioral changes** in this section, allowing users to fully understand the **practical application** of the app in their store.

## Customization

The first thing that should be present in this section is the sentence below, showing users the recipe pertaining to style customization in components:

`In order to apply style customizations in this and other blocks, follow the instructions given in the recipe on [Using className Handles for store customization](TODO: Link to styles hook docs).`

Thereafter, you should add a single column table with the available styles handles for the component, like the one below. Note that the Handles must be ordered alphabetically.

| CSS Handles |
| ----------- |
| `XXXXX` |
| `XXXXX` |
| `XXXXX` |
| `XXXXX` |
| `XXXXX` |


If there are none, add the following sentence instead:

`No className Handles are available yet for the app customization.`
