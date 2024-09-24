# 嵌套虚拟化

在Hyper-V中运行的Windows 10虚拟机内再安装和运行Hyper-V（即嵌套虚拟化）是可以实现的，但需要满足一些特定条件和配置。以下是实现该功能的步骤：

### 1. 使能嵌套虚拟化

嵌套虚拟化功能是Hyper-V在Windows Server 2016和Windows 10周年更新（版本1607）中引入的功能。首先，需要确保Hyper-V宿主机上的处理器支持虚拟化扩展（如Intel VT-x或AMD-V），并且已经在BIOS或UEFI中启用。

### 2. 配置虚拟机

#### 在宿主机上运行PowerShell命令：

1. 打开PowerShell并执行以下命令以启用嵌套虚拟化：
   
   ```powershell
   Set-VMProcessor -VMName <VMName> -ExposeVirtualizationExtensions $true
   ```

   将`<VMName>`替换为你虚拟机的名称。

2. 确保虚拟机的CPU兼容性设置已关闭：

   ```powershell
   Set-VMProcessor -VMName <VMName> -CompatibilityForMigrationEnabled $false
   ```

### 3. 启用嵌套虚拟化的其他设置

确保虚拟机的动态内存已关闭，因为动态内存与嵌套虚拟化不兼容。

### 4. 在虚拟机中安装Hyper-V

1. 启动虚拟机并登录Windows 10。
2. 打开“控制面板”或“设置”，导航到“程序和功能”，选择“启用或关闭Windows功能”。
3. 勾选“Hyper-V”并点击“确定”，然后按照提示安装并重启虚拟机。

### 5. 验证安装

重启后，打开Hyper-V管理器，确认可以正常创建和管理虚拟机。

通过以上步骤，你应该能够在Hyper-V中的Windows 10虚拟机内再运行Hyper-V。这种配置特别适用于开发和测试需要在多层虚拟化环境下运行的应用程序或服务。
