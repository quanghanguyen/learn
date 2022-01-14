USE HowKteam 
GO

-- Check là thêm điều kiện khi nhập dữ liệu vào bảng

CREATE TABLE EMHA 
(
    ID INT PRIMARY KEY IDENTITY,
    LUONG INT CHECK ( LUONG > 3000 AND LUONG < 9000) 

)
GO

INSERT dbo.EMHA ( LUONG )

VALUES (5000)

-- chỗ này không thõa mãn điều kiện
INSERT dbo.EMHA ( LUONG )

VALUES (2000)
















