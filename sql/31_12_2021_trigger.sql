USE HowKteam 
GO

-- trigger kiểu như là phòng tuyến cho cơ sở dữ liệu, hạn chế thông tin được xóa hoặc chỉnh sửa
-- Trigger sẽ được gọi mỗi khi có thao tác thay đổi thông tin bảng
-- Inserted: chứa những trường đã insert/ update vào 1 bảng
-- Deleted: Chứa những trường bị xóa khỏi bảng

CREATE TRIGGER InsertGiaoVien
ON dbo.GIAOVIEN
FOR INSERT, UPDATE
AS

BEGIN
ROLLBACK TRAN
PRINT N'Trigger'

END
GO



-------------------------------------------------------------
--Không cho phép xóa thông tin của giáo viên có tuổi lớn hơn 40

CREATE TRIGGER NODELETE
ON dbo.GIAOVIEN
FOR DELETE 
AS

BEGIN
	DECLARE @COUNT INT = 0

	SELECT @COUNT = COUNT(*) 
	FROM deleted 
	WHERE ( YEAR(GETDATE()) - YEAR(NGSINH) ) > 40

	IF (@COUNT > 0)

	BEGIN
	PRINT N'Không được xóa người lớn hơn 40 tuổi'
	ROLLBACK TRAN
	END

END




