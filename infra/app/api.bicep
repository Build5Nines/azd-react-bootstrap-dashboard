param name string
param location string
param tags object
param applicationInsightsName string
param allowedOrigins array

// Create the App Service Plan
module appServicePlan '../core/host/appserviceplan.bicep' = {
  name: 'appServicePlan'
  params: {
    name: 'asp-${name}'
    location: location
    tags: tags
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
    runtimeName: 'node'
    runtimeVersion: '20-lts'
    applicationInsightsName: applicationInsightsName
    appSettings:{
      'ALLOWED_ORIGINS': join(allowedOrigins, ',')
    }
  }
}

output appServicePlanId string = appServicePlan.outputs.id
output apiAppName string = appService.outputs.name
output apiAppUrl string = appService.outputs.uri
