# azd-react-bootstrap-dashboard ![Awesome Badge](https://awesome.re/badge-flat2.svg)

An `azd` template providing a React.js App + Bootstrap 5 front-end dashboard app with backend Node.js API app hosted in Microsoft Azure Static Web Apps and App Service.

To use this template, follow these steps using the [Azure Developer CLI](https://learn.microsoft.com/azure/developer/azure-developer-cli/overview):

1. Log in to Azure Developer CLI. This is only required once per-install.

    ```bash
    azd auth login
    ```

2. Initialize this template using `azd init`:

    ```bash
    azd init --template build5nines/azd-react-bootstrap-dashboard
    ```

3. Use `azd up` to provision your Azure infrastructure and deploy the web application to Azure.

    ```bash
    azd up
    ```

## Architecture Diagram

![Diagram of Azure Resources provisioned with this template](assets/build5nines-azd-react-bootstrap-dashboard.png)

## Dashboard UI

Here's a screenshot of what the Dashboard UI built with React.js and Bootstrap looks like:

![Dashboard screenshot](assets/dashboard-screenshot.png)

## Author

This template was written by [Chris Pietschmann](https://pietschsoft.com), founder of [Build5Nines](https://build5nines.com), Microsoft MVP, HashiCorp Ambassador, and Microsoft Certified Trainer (MCT).
