param name string
param location string = resourceGroup().location
param tags object = {}

@allowed([
  'Enabled', 'Disabled'
])
param publicNetworkAccess string = 'Enabled'

@allowed([
  'Standard', 'Free'
])
param SkuName string = 'Standard'


resource appConfig 'Microsoft.AppConfiguration/configurationStores@2024-05-01' = {
  name: name
  location: location
  sku: {
    name: SkuName
  }
  properties: {
    publicNetworkAccess: publicNetworkAccess
  }

  tags: tags
}

output name string = appConfig.name
