USE HowKteam 
GO




DROP TABLE dbo.TestAuto

SELECT *
FROM dbo.TestAuto 

CREATE TABLE dbo.TestAuto 
(   -- tự tăng trường và phải là số
    -- mặc định bắt đầu từ 1 và tăng 1 đơn vị
	-- có thể điều chỉnh bắt đầu và khoảng cách
    ID INT PRIMARY KEY IDENTITY (0, 2), 
	Name NVARCHAR(100)
)

INSERT dbo.TestAuto (Name)

VALUES (N'Quang Ha')

INSERT dbo.TestAuto (Name)

VALUES (N'Quang Ha')

INSERT dbo.TestAuto (Name)

VALUES (N'Quang Ha')

INSERT dbo.TestAuto (Name)

VALUES (N'Quang Ha')

INSERT dbo.TestAuto (Name)

VALUES (N'Quang Ha')























