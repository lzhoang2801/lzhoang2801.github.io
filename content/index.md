---
title: Home
navigation: false
---

::hero
---
announcement:
  title: 'Release v0.0.1'
  icon: 'noto:party-popper'
  to: https://github.com/lzhoang2801/OpCore-Simplify
actions:
  - name: Dịch vụ
    to: /services
  - name: Hướng dẫn
    variant: outline
    to: /introduction
---

#title
OpCore Simplify.

#description
Tạo OpenCore EFI dễ dàng hơn bao giờ hết với công cụ mạnh mẽ và trực quan.
::

#### ✨ **Tính năng**

::steps
### **Hỗ trợ toàn diện phần cứng và macOS**  
   Hỗ trợ đầy đủ phần cứng. Sử dụng `Compatibility Checker` để kiểm tra thiết bị và phiên bản macOS được hỗ trợ hoặc không hỗ trợ.

### **Các bản vá ACPI và Kexts**  
   Tự động phát hiện và thêm các bản vá ACPI và kexts dựa trên cấu hình phần cứng.
   
   - Tích hợp với [SSDTTime](https://github.com/corpnewt/SSDTTime) cho các bản vá phổ biến (ví dụ: FakeEC, FixHPET, PLUG, RTCAWAC).
   - Bao gồm các bản vá tùy chỉnh:
      - Ngăn chặn kernel panic bằng cách chỉ định mục CPU đầu tiên cho CPU đang hoạt động, vô hiệu hóa thiết bị UNC0, và tạo thiết bị RTC mới cho hệ thống HEDT.
      - Vô hiệu hóa các thiết bị PCI không được hỗ trợ hoặc không sử dụng, chẳng hạn như GPU (sử dụng các phương pháp Optimus và Bumblebee hoặc thêm thuộc tính disable-gpu), card Wi-Fi và NVMe controller.  
      - Sửa giá trị trạng thái ngủ trong phương thức _PRW (GPRW, UPRW, HP đặc biệt) để tránh việc thức dậy ngay lập tức.
      - Thêm các thiết bị như ALS0, BUS0, MCHC, PMCR, PNLF, RMNE, IMEI, USBX, XOSI, cùng với bản vá Surface.
      - Kích hoạt các thiết bị ALSD và GPI0.

### **Cập nhật tự động**  
   Tự động kiểm tra và cập nhật OpenCorePkg và kexts từ [Dortania Builds](https://dortania.github.io/builds/) và các bản phát hành GitHub trước mỗi lần build EFI.
            
### **Cấu hình EFI**  
   Áp dụng tùy chỉnh bổ sung dựa trên cả các nguồn được sử dụng phổ biến và kinh nghiệm cá nhân.

   - Spoof ID GPU cho các GPU AMD không được macOS nhận diện.
   - Sử dụng kext CpuTopologyRebuild cho các CPU Intel có lõi P và lõi E để cải thiện hiệu suất.
   - Vô hiệu hóa System Integrity Protection (SIP).
   - Spoof ID CPU cho các bộ xử lý Intel Pentium, Celeron, Core, và Xeon.
   - Thêm tên CPU tùy chỉnh cho các CPU AMD, cũng như Intel Pentium, Celeron, Xeon, và dòng Core từ thế hệ Rocket Lake (thứ 11) trở lên.
   - Thêm bản vá để cho phép khởi động macOS với SMBIOS không được hỗ trợ.
   - Thêm các mục NVRAM để bỏ qua kiểm tra bộ điều khiển Bluetooth bên trong.
   - Cấu hình đúng ResizeAppleGpuBars dựa trên thông tin Resizable BAR cụ thể.
   - Cho phép cấu hình iGPU linh hoạt giữa chế độ headless và điều khiển màn hình khi có GPU rời được hỗ trợ.
   - Đưa GPU Intel vào chế độ VESA với các cổng HDMI và DVI để đơn giản hóa quá trình cài đặt.
   - Sử dụng ID layout ngẫu nhiên có bình luận dựa trên tác giả hoặc thương hiệu bo mạch chủ để có chất lượng âm thanh tốt hơn.
   - Cung cấp cấu hình cần thiết để sử dụng OpenCore Legacy Patcher
   - Thêm thuộc tính thiết bị tích hợp cho các thiết bị mạng (sửa lỗi 'Could not communicate with the server' khi sử dụng iServices) và NVMe controller (sửa lỗi bộ nhớ trong hiển thị dưới dạng bộ nhớ ngoài).  
   - Ưu tiên SMBIOS được tối ưu hóa cho cả quản lý năng lượng và hiệu suất.  
   - Kích hoạt lại quản lý năng lượng CPU trên các CPU Intel đời cũ trong macOS Ventura 13 trở lên.

   và nhiều hơn nữa...

### **Dễ dàng tùy chỉnh**  
   Ngoài các thiết lập mặc định được áp dụng, người dùng có thể dễ dàng tùy chỉnh thêm nếu muốn.

   - Các bản vá ACPI tùy chỉnh, kexts, và điều chỉnh SMBIOS (**không khuyến nghị**).
   - Cho phép load kexts trên các phiên bản macOS không được hỗ trợ.
   - Hỗ trợ AirportItlwm trên macOS Sequoia 15 với **giải pháp tạm thời**. Tự động chọn các kexts AirportItlwm, IOSkywalkFamily, IO80211FamilyLegacy và AMFIPass, sau đó áp dụng bản vá root từ OpenCore Legacy Patcher.
::
