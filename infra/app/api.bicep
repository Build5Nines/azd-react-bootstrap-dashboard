param name string
param location string
param tags object
param applicationInsightsName string
param allowedOrigins array
param appConfigurationName string = ''

// Create the App Service Plan
module appServicePlan '../core/host/appserviceplan.bicep' = {
  name: 'appServicePlan'
  params: {
    name: 'asp-${name}'
    location: location
    tags: tags
    sku: {
      name: 'F1'
      tier: 'Free'
      size: 'F1'
      family: 'F'
      capacity: 1
    }
  }
}

// Create the App Service
module appService '../core/host/appservice.bicep' = {
  name: 'appService'
  params: {
    name: name
    location: location
    tags: union(tags, { 'azd-service-name': 'api' })
    appServicePlanId: appServicePlan.outputs.id
    managedIdentity: true
    appConfigurationName: appConfigurationName
    alwaysOn: false
    use32BitWorkerProcess: true
    runtimeName: 'node'
    runtimeVersion: '20-lts'
    applicationInsightsName: applicationInsightsName
    allowedOrigins: allowedOrigins
    appSettings:{
    }
  }
}

output appServicePlanId string = appServicePlan.outputs.id
output apiAppName string = appService.outputs.name
output apiAppUrl string = appService.outputs.uri
