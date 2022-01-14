USE HowKteam 
GO


-- Kiểu dữ liệu tự định nghĩa ( kiểu như mình đặt tên cho 1 kiểu dữ liệu --> HADEPTRAI = NVARCHAR(100)

-- Cú pháp: EXEC sp_addtype 'Tên kiểu dữ liệu (mình đặt)', 'Kiểu dữ liệu thực tế', 'NOT NULL (có hay không cũng được)'

EXEC sp_addtype 'HADEPTRAI', 'NVARCHAR(100)', 'NOT NULL'

CREATE TABLE HADEPTRAI
(
	NAME HADEPTRAI PRIMARY KEY,
	ADDRESS NVARCHAR(500)
) 
GO

-- Xóa kiểu dữ liệu của bản thân

EXEC sp_droptype 'HADEPTRAI'



